import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../../redux/user/selectors';
import { selectSearchItems, selectSearchTotalCount } from '../../redux/search/selectors';
import { searchForRepo } from '../../redux/search/actions';
import { setFullScreenModal } from '../../redux/app/actions';
import { name, fullName, htmlUrl } from '../../redux/search/constants';

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
        order: sortByAscOrder ? 'asc' : 'desc',
        isFilteringChanged,
      }),
    );
    setIsFilteringChanged(false);
  };

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%',
          marginVertical: 10,
        }}>
        <Text>Sort By Stars</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={sortByStars ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(val) => {
            setSortByStars(val);
            setSortByForks(false);
          }}
          value={sortByStars}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%',
          marginVertical: 10,
        }}>
        <Text
          style={{
            marginRight: 30,
          }}>
          Sort By Forks
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={sortByForks ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(val) => {
            setSortByForks(val);
            setSortByStars(false);
          }}
          value={sortByForks}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%',
          marginVertical: 10,
        }}>
        <Text
          style={{
            marginRight: 30,
          }}>
          Ascending Order
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={sortByAscOrder ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setSortByAscOrder}
          value={sortByAscOrder}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => search(1)}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.list}
        onEndReachedThreshold={0.01}
        onEndReached={() => {
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
        }}
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
