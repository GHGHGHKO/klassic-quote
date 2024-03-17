"use client"

import React, { useState, useEffect } from "react";

interface Quote {
    id: number;
    quote: string;
    author: string;
}

const initialQuoteState: Quote = {
    id: 0,
    quote: "",
    author: ""
};

const GetRandomQuote = () => {
    const [loading, setLoading] = useState(true);
    const [quote, setQuote] = useState<Quote>(initialQuoteState);

    useEffect(() => {
        window
            .fetch(`https://klassic-quote-api.mooo.com/v1/random-quote`, {
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
            {loading && <p>Loading...</p>}
            {quote && (
                <div>
                    <p>{quote.quote}</p>
                    <p>{"타짜, " + quote.author}</p>
                </div>
            )}
        </div>
    );
}

export default GetRandomQuote;
