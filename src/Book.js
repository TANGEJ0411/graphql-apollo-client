import { useLazyQuery, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { GET_BOOK, GET_BOOKS } from './utils/graphql'

function Book() {

    const { data: booksData, loading: booksLoading, error: booksError, refetch: refetchBooks } = useQuery(GET_BOOKS)
    const [fetchBook, { data: bookData, loading: bookLoading, error: bookError }] = useLazyQuery(GET_BOOK)

    const [id, setId] = useState()

    return (
        <>
            <button onClick={() => { refetchBooks() }}>refetch all books</button>
            <input value={id} onChange={(e) => { setId(e.target.value) }} />
            <button onClick={() => { fetchBook({ variables: { id: Number(id) } }) }}>book</button>
        </>
    )
}

export default Book