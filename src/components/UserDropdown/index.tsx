import Link from "next/link";
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from "@styled-icons/material-outlined";
import { ChevronDown } from "@styled-icons/boxicons-regular/ChevronDown";

import Dropdown from "components/Dropdown";

import * as S from "./styles";

import { UserDropdownProps } from "./userDropdown";

const UserDropdown = ({ username }: UserDropdownProps) => {
  return (
    <Dropdown
      title={
        <>
          <AccountCircle size={24} />
          <S.Username>{username}</S.Username>
          <ChevronDown size={24} />
        </>
      }
    >
      <S.Nav>
        <Link href="/profile/me" passHref>
          <S.LinkItem>
            <AccountCircle />
            <span>My profile</span>
          </S.LinkItem>
        </Link>

        <Link href="/wishlist" passHref>
          <S.LinkItem title="Wishlist">
            <FavoriteBorder />
            <span>Wishlist</span>
          </S.LinkItem>
        </Link>

        <Link href="/logout" passHref>
          <S.LinkItem title="Sign out">
            <ExitToApp />
            <span>Sign out</span>
          </S.LinkItem>
        </Link>
      </S.Nav>
    </Dropdown>
  );
};

export default UserDropdown;
