import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { name, fullName, htmlUrl, ORDER_ASC, ORDER_DESC } from '../../redux/search/constants';
import { noop } from '../../utils/noop';
import { texts } from '../../localizations';
import Chooser from '../sharedComponents/Chooser';
import ListItem from '../sharedComponents/ListItem';

import styles from './styles';

const ContentBlock = ({ login, items, totalCount, triggerModal = noop, onSearchPress = noop }) => {
  const componentJustMounted = useRef(true);

  const [repoName, setRepoName] = useState('');
  const [page, setPage] = useState(2);

  const [loadingMore, setLoadingMore] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const [sortByStars, setSortByStars] = useState(false);
  const [sortByForks, setSortByForks] = useState(false);
  const [sortByAscOrder, setSortByAscOrder] = useState(false);

  const [isFilteringChanged, setIsFilteringChanged] = useState(false);

  const search = (pageNumber) => {
    onSearchPress({
      repoName,
      page: pageNumber,
      sortByStars,
      sortByForks,
      order: sortByAscOrder ? ORDER_ASC : ORDER_DESC,
      isFilteringChanged,
    });
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
      <Text style={styles.heading}>
        {texts.hello}, {login}. {texts.letsFindRepo}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder={texts.repoName}
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
        label={texts.sortByStars}
        containerStyle={styles.chooser}
      />
      <Chooser
        value={sortByForks}
        onChange={(val) => {
          setSortByForks(val);
          setSortByStars(false);
        }}
        label={texts.sortByForks}
        containerStyle={styles.chooser}
      />
      <Chooser
        value={sortByAscOrder}
        onChange={setSortByAscOrder}
        label={texts.ascendingOrder}
        disabled={!(sortByStars || sortByForks)}
        containerStyle={styles.chooser}
      />

      <TouchableOpacity style={styles.button} onPress={() => search(1)}>
        <Text>{texts.search}</Text>
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={styles.list}
        onEndReachedThreshold={0.01}
        onEndReached={fetchOnScroll}
        data={items}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => triggerModal({ isFullScreen: true, url: item[htmlUrl] })}
            title={item[name]}
            subtitle={item[fullName]}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default ContentBlock;
