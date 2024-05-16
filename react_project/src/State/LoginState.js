import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const LoginStateAtom = atom({
  key: 'LoginState',
  default: {
    state: false,
    accessToken: '',
    refreshToken: '',
    nickName: '',
    userId: '',
  },
  effects_UNSTABLE: [persistAtom],
});