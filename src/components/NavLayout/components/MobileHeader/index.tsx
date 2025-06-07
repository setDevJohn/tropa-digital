import { RxHamburgerMenu } from 'react-icons/rx';

import { MobileHeaderContainer } from './styles';

interface IMobileHeader {
  setSideBar: (status: boolean) => void;
}

export function MobileHeader ({ setSideBar }: IMobileHeader) {
  return (
    <MobileHeaderContainer>
      <RxHamburgerMenu size={30} onClick={() => setSideBar(true)}/>
    </MobileHeaderContainer>
  );
}