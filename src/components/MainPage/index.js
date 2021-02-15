import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../../redux/user/selectors';
import { selectSearchItems, selectSearchTotalCount } from '../../redux/search/selectors';
import { searchForRepo } from '../../redux/search/actions';
import { name, fullName, htmlUrl } from '../../redux/search/constants';
import { PAGES } from '../../navigation/constants';

import styles from './styles';

const MainPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const login = useSelector(selectUserLogin);
  const items = useSelector(selectSearchItems);
  const totalCount = useSelector(selectSearchTotalCount);

  const [repoName, setRepoName] = useState('');
  const [page, setPage] = useState(2);

  const [loadingMore, setLoadingMore] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(searchForRepo.init({ repoName, page: 1 }));
        }}>
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
          dispatch(searchForRepo.init({ repoName, page }));
          setPage((prevPage) => prevPage + 1);
          setLoadingMore(false);
        }}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(PAGES.RepoPage, { url: item[htmlUrl] });
            }}>
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
