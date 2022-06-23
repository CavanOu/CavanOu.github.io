import React from 'react'
import { useEffect, useState } from 'react'
import { CardBox } from './style'
import { Link } from 'react-router-dom'
import Card from '../Card'
import { getTest, getVideos } from '../../api/request'

export default function VideoListBox() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        (async () => {
            let { data: { data: videoData } } = await getVideos();
            // let { data: { list: Test } } = await getTest(); //外部api直接调用
            // console.log(Test)
            console.log(videoData)
            setVideos(videoData)
        })()
    }, [])
    return (
        <div className='video-list'>
            <CardBox className="card-box">
                <Card className='v-card' videos={videos} />
                <Card className='v-card' />
                <Card className='v-card' />
                <Card className='v-card' />
            </CardBox>
        </div>
    )
}
