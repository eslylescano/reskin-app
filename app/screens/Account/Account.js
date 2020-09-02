import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase';
import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading';



export default function Account() {
    const [login,setLogin]=useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user)=>{
            !user?setLogin(false):setLogin(true);
        });
    }, [])
    if(login===null) return <Loading isVisible={true} text="Loading..."></Loading>

    return login ?<UserLogged/>:<UserGuest/>
}

const styles = StyleSheet.create({})
