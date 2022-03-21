import getPath from 'core/routing/getPath'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { Link } from 'react-router-dom'
import { userExit } from 'store/slices/userSlice'
import styles from './AccountMenu.module.less'

export const AccountMenu: React.FC = () => {
    const dispatch = useAppDispatch()
    const { jwt } = useAppSelector((state) => state.user)

    const signOutClickhandler = (event: React.MouseEvent) => {
        event.preventDefault()
        dispatch(userExit())
    }

    if (jwt)
        return (
            <div className={styles.accountmenu}>
                <Link to={getPath('/dashboard')}>My Account</Link>
                <Link to={getPath('/dashboard')}>My Wish List (0)</Link>
                <Link to={getPath('/dashboard')}>Compare (0)</Link>
                <hr />
                <a onClick={(event) => signOutClickhandler(event)}>Sign Out</a>
            </div>
        )

    return (
        <div className={styles.accountmenu}>
            <Link to={getPath('/login/register')}>Create an Account</Link>
            <Link to={getPath('/login/auth')}>Sign In</Link>
        </div>
    )
}
