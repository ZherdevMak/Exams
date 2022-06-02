import React from 'react';
import logo from './logo.svg';
import './App.css';

type UserWalletType = {
    title: string
    amount: number
}
type UserWalletPropsType = {
    wallet: UserWalletType
}

export const UserWallet: React.FC<UserWalletPropsType> = (props) => {
    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>
}

export const UserMoney = () => {
    const wallets = [
        {title: 'bitcoin', amount: 1},
        {title: '$', amount: 100}
    ]

    return <div>
        <UserWallet wallet={props.} />
        <UserWallet wallet={yyy} />
    </div>
}
// то нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
//
//     Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}



import ReactDOM from 'react-dom'

export const VideoHeader = (props: {videoName: string}) => {
    return <div>
        😀 {props.videoName}
    </div>
}
export const VideoContent = (props: {videoContent: string}) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription = (props: {videoDescription: string}) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const YoutubeVideo = (props: any) => {
    return <div>
        <VideoHeader  />
        <VideoContent yyy />
        <VideoDescription zzz />
    </div>
}

export const App = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course'
    }

    return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);

// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел



import ReactDOM from 'react-dom'

const CrazyButton = (props: any) => {

    const style = {
        color: props.fon,
        backgroundColor: props.YYY
    }

    return <button style={style}>
        {props.ZZZ}
    </button>
}

export const App = () => {
    return <div>
        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>
        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)

// Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел


import ReactDOM from 'react-dom'

const Son = (props: any) => {
    return <div>
        I am son. My name is {props.name}
    </div>
}


const Father = (props: any) => {
    return <div>
        I am father. My name is {props.name}
        <Son name={props.sonName} />
    </div>
}

const Granny = (props: any) => {
    return <div>
        I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName} />
    </div>
}

export const App = () => {
    return <div>
        <Granny XXX={'Бабуля'} YYY={'Батя'} ZZZ={'Сын'}/>
    </div>
}

ReactDOM.render(<App/>,
    document.getElementById('root')
)