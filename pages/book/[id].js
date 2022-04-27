import Router, {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {Card, Col, Image, Row} from "antd";
import Text from "antd/lib/typography/Text";
import {nanoid} from "@reduxjs/toolkit";
import Link from "next/link";
import {reduxWrapper} from "../../store/store";
import {getData, getRunningOperationPromises} from "../../store/api-reducer";
import React, {useEffect, useState} from "react";
// import * as fs from "fs";

const linkClickHandler = () => {
    Router.push('/')
}

export default function SectionId({data, initialData}) {

    const router = useRouter();
    // const [authStatus, setAuthStatus] = useState(initialData.authStatus);

    // useEffect(() => {
    //     setAuthStatus(initialData.authStatus)
    // }, [initialData.authStatus])

    const [Data, setData] = useState(undefined);

    useEffect(() => {
        setData(data.find(data => data.dataId.toString() === router.query.id))
    }, [data, router.query.id])

    console.log(Data)

    // function logout() {
    //     localStorage.clear();
    //     initialData.authStatus = false;
    //     setAuthStatus(false);
    //     console.log(initialData.authStatus);
    // }

    return (

        <MainLayout>
            <nav>
                <button onClick={linkClickHandler}>To Currency List</button>
                <div>
                    {/*{authStatus ? <span>{localStorage.userMail}</span> : <Link href={'/login'}><a>Login Page</a></Link>}*/}
                    {/*{authStatus && <button onClick={logout}>Logout</button>}*/}
                    {/*{initialData.authStatus ? <span>{localStorage.userMail}</span> : <Link href={'/login'}><a>Login Page</a></Link>}*/}
                </div>
            </nav>
            <div>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Card>
                        <Col key={nanoid()} span={16}>
                            <Text mark>Конвертер валют</Text>
                            {/*<Text mark>Шедевральное произведение &quot{data && data.title}&ldquo</Text>*/}

                            {/*<p title={bookdata && bookdata.title}>{bookdata && bookdata.title}</p>*/}
                            {/*<p author={data && data.author}>{data && data.author}</p>*/}
                            {/*<Image*/}
                            {/*    alt={data && data.title}*/}
                            {/*    height={350}*/}
                            {/*    width={215}*/}
                            {/*    src={data && data.img}*/}
                            {/*/>*/}
                            {/*{initialData.authStatus && }*/}
                        </Col>
                    </Card>
                </Row>
            </div>
        </MainLayout>
    )
}

// export const getServerSideProps = reduxWrapper.getServerSideProps(
//     (store) => async (context) => {
//         store.dispatch(getData.initiate());
//         let res = await Promise.all(getRunningOperationPromises()).then(
//             result => result,
//             error => console.log("Rejected")
//         );
//
//         return {props: {data: res[0].data, initialData: {authStatus: false}}};
//
//     }
// );
