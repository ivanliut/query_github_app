import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserLogin } from '../redux/user/selectors';
import { selectSearchItems, selectSearchTotalCount } from '../redux/search/selectors';
import { searchForRepo } from '../redux/search/actions';
import { PAGES } from '../navigation/constants';

const { width: screenWidth } = Dimensions.get('window');

const MainPage = ({ navigation }) => {
  const dispatch = useDispatch();

  const login = useSelector(selectUserLogin);
  const items = useSelector(selectSearchItems);
  const totalCount = useSelector(selectSearchTotalCount);

  const [repoName, onChangeRepoName] = useState('');
  const [page, setPage] = useState(2);

  const [loadingMore, setLoadingMore] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello {login}, Let's find a repo!</Text>
      <TextInput
        style={{
          height: 40,
          width: screenWidth - 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 5,
          marginVertical: 10,
        }}
        autoCapitalize="none"
        placeholder="repo name"
        onChangeText={(text) => onChangeRepoName(text)}
        value={repoName}
        maxLength={30}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 5,
        }}
        onPress={() => {
          dispatch(searchForRepo.init({ repoName, page: 1 }));
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
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
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                width: screenWidth - 40,
              }}
              onPress={() => {
                navigation.navigate(PAGES.RepoPage, { url: item.html_url });
              }}>
              <Text>{item.name}</Text>
              <Text>{item.full_name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              marginVertical: 10,
            }}
          />
        )}
      />
    </View>
  );
};

export default MainPage;
