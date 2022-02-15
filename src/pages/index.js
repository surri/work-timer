import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LinearWithValueLabel from '../components/LinearWithValueLabel'
import TimePicker from '../components/TimePicker'



const IndexPage = () => {
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [percent, setPercent] = useState();

    const current = new Date();

    React.useEffect(() => {
        const timer = setInterval(() => {
            setPercent((((current - startTime) / (endTime - startTime)) * 100).toFixed(1) || 0);
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, [percent]);

    return (
        <Layout>
            <Seo title="Home" />
            <TimePicker label="출근시간" value={startTime} onChange={(start) => setStartTime(start)}/>
            <TimePicker label="퇴근시간" value={endTime} onChange={(end) => setEndTime(end)}/>
            <LinearWithValueLabel
                percent={percent}
            />
            <p>
                <Link to="/page-2/">Go to page 2</Link> <br />
                <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
                <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
                <Link to="/using-dsg">Go to "Using DSG"</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
