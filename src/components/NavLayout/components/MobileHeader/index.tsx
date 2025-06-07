import { RxHamburgerMenu } from 'react-icons/rx';

import { MobileHeaderContainer } from './styles';

interface IMobileHeader {
  sideBar: boolean;
  setSideBar: (status: boolean) => void;
}

export function MobileHeader ({ sideBar, setSideBar }: IMobileHeader) {
  return (
    <MobileHeaderContainer $open={sideBar}>
      <RxHamburgerMenu size={30} onClick={() => setSideBar(true)}/>
    </MobileHeaderContainer>
  );
}