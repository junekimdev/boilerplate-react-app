import { ReactNode } from 'react';
import Presenter from './mainFramePresenter';
//import { useTypedSelector } from '../../controllers';

const Interactor = (props: { children?: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return <Presenter {...{ children }} />;
};

export default Interactor;
