import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchForRepo } from '../../redux/search/actions';
import { selectUserLogin } from '../../redux/user/selectors';
import { setFullScreenModal } from '../../redux/app/actions';
import { selectSearchItems, selectSearchTotalCount } from '../../redux/search/selectors';
import { ContentBlock } from '../../components/MainPage';

const MainPage = () => {
  const dispatch = useDispatch();

  const login = useSelector(selectUserLogin);
  const items = useSelector(selectSearchItems);
  const totalCount = useSelector(selectSearchTotalCount);

  const triggerModal = (modalParams) => dispatch(setFullScreenModal(modalParams));
  const onSearchPress = (searchParams) => dispatch(searchForRepo.init(searchParams));

  return (
    <ContentBlock
      login={login}
      items={items}
      totalCount={totalCount}
      triggerModal={triggerModal}
      onSearchPress={onSearchPress}
    />
  );
};

export default MainPage;
