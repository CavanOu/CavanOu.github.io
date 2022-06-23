import React from 'react'
import { Link } from 'react-router-dom'
import { CardWrapper } from './style'
import NumberFormat from '@/utils'
import classnames from 'classnames'


export default function Card({ videos = [] }) {
    // const { data } = { videos }
    console.log(videos)
    return (
        <>
            {
                videos.map(
                    item => (
                        <CardWrapper key={item.aid}>
                            <Link
                                to="/videodetail"
                                className='v-card'
                            >
                                <div className="card">
                                    <picture>
                                        <img src={item.pic}
                                            alt={item.title}
                                            // onLoad="eager"
                                            className={classnames("m-bfs-pic pic", { notfond: item.pic == "" })} />
                                        {/* 待实现，数据请求失败时，display:none; */}
                                        {/* {console.log(item.pic)} */}
                                    </picture>
                                    <div className="count">
                                        <span>
                                            <i className="iconfont icon_shipin_bofangshu"></i>
                                            {NumberFormat(item.play)}
                                        </span>
                                        <span>
                                            <i className="iconfont icon_shipin_danmushu"></i>
                                            {NumberFormat(item.video_review)}
                                        </span>
                                    </div>
                                </div>
                                <p className="title">{item.title}</p>
                            </Link >
                        </CardWrapper>
                    )
                )
            }

        </>
    )
}
