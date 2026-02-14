import { NextPage } from "next";
import Head from "next/head";
import { useReducer } from "react";

const ClickCycle = () => {
    // These are from the "Quotable Corps" quote pool within the Digital Corps office.
    // I do not condone removing people's legs.
    const textToCycle: string[] = [
        "do we need her legs? no!",
        "Get rid of all legs!",
        "I feel like by 50, you've seen it all.",
        "You're _gonna_ get picked up."
    ]

    // useReducer() here because the state is only changed in a very specific way
    const [currentIndex, cycleIndex] = useReducer(
        (state: number) => (state + 1) % textToCycle.length, 0)

    return (
        <div className="click-cycle">
            <blockquote>
                {textToCycle[currentIndex]}
            </blockquote>
            <button onClick={() => cycleIndex()}>Cycle!</button>
        </div>
    )
}

const PageComponentClickCycle: NextPage = () => {
    return (
        <>
            <Head>
                <title>Click Cycle Page</title>
                <meta property="og:title" content="click cycle" key="title" />
            </Head>
            <h1>Click Cycle</h1>
            <ClickCycle></ClickCycle>
        </>
    )
}

export default PageComponentClickCycle;