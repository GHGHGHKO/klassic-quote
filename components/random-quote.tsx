"use client"

import React, { useState, useEffect } from "react";
import {siteConfig} from "@/config/site";
import {Quote} from "@/data/quote";

const initialQuoteState: Quote = {
    id: 0,
    quote: "",
    author: "",
    name: ""
};

const GetRandomQuote = () => {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState<Quote>(initialQuoteState);

    useEffect(() => {
        window
            .fetch(siteConfig.links.randomQuote, {
            method: 'GET', // GET 메서드 추가
            headers: {
                'Content-Type': 'application/json' // 필요에 따라 헤더를 추가할 수 있습니다.
            }
        })
            .then((res) => res.json())
            .then((user) => {
                setQuote(user);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? <p>Loading...</p> : (
                <div>
                    <p><i>{`"${quote.quote}"`}</i></p>
                    <p style={{ textAlign: 'right' }}>{"- " + (quote.name) + ", " + (quote.author)}</p>
                </div>
            )}
        </div>
    );
}

export default GetRandomQuote;
