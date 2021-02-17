import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../../redux/user/selectors';
import { selectSearchItems, selectSearchTotalCount } from '../../redux/search/selectors';
import { searchForRepo } from '../../redux/search/actions';
import { setFullScreenModal } from '../../redux/app/actions';
import { name, fullName, htmlUrl, ORDER_ASC, ORDER_DESC } from '../../redux/search/constants';
import Chooser from '../sharedComponents/Chooser';

import styles from './styles';

const MainPage = () => {
  const dispatch = useDispatch();
  const componentJustMounted = useRef(true);

  const login = useSelector(selectUserLogin);
  const items = useSelector(selectSearchItems);
  const totalCount = useSelector(selectSearchTotalCount);

  const [repoName, setRepoName] = useState('');
  const [page, setPage] = useState(2);

  const [loadingMore, setLoadingMore] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const [sortByStars, setSortByStars] = useState(false);
  const [sortByForks, setSortByForks] = useState(false);
  const [sortByAscOrder, setSortByAscOrder] = useState(false);

  const [isFilteringChanged, setIsFilteringChanged] = useState(false);

  const search = (pageNumber) => {
    dispatch(
      searchForRepo.init({
        repoName,
        page: pageNumber,
        sortByStars,
        sortByForks,
        order: sortByAscOrder ? ORDER_ASC : ORDER_DESC,
        isFilteringChanged,
      }),
    );
    setIsFilteringChanged(false);
  };

  const fetchOnScroll = () => {
      if (firstRender) {
          setFirstRender(false);
          return;
      }

      if (loadingMore) {
          return;
      }

      if (page > totalCount) {
          return;
      }

      setLoadingMore(true);
      search(page);
      setPage((prevPage) => prevPage + 1);
      setLoadingMore(false);
  }

  useEffect(() => {
    if (!componentJustMounted.current) {
      setIsFilteringChanged(true);
    } else {
      componentJustMounted.current = false;
    }
  }, [sortByStars, sortByForks, sortByAscOrder]);

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Hello {login}, Let's find a repo!</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="repo name"
        onChangeText={(text) => setRepoName(text)}
        value={repoName}
        maxLength={30}
      />
      <Chooser
        value={sortByStars}
        onChange={(val) => {
          setSortByStars(val);
          setSortByForks(false);
        }}
        label={'Sort By Stars'}
        containerStyle={styles.chooser}
      />
      <Chooser
        value={sortByForks}
        onChange={(val) => {
            setSortByForks(val);
            setSortByStars(false);
        }}
        label={'Sort By Forks'}
        containerStyle={styles.chooser}
      />
      <Chooser
        value={sortByAscOrder}
        onChange={setSortByAscOrder}
        label={'Ascending Order'}
        disabled={!(sortByStars || sortByForks)}
        containerStyle={styles.chooser}
      />

      <TouchableOpacity style={styles.button} onPress={() => search(1)}>
        <Text>Search</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={styles.list}
        onEndReachedThreshold={0.01}
        onEndReached={fetchOnScroll}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => dispatch(setFullScreenModal({ isFullScreen: true, url: item[htmlUrl] }))}>
            <Text>{item[name]}</Text>
            <Text>{item[fullName]}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default MainPage;
