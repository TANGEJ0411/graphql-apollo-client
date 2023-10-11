import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_CATE } from './utils/graphql'


function Category() {

    const { data, loading, error } = useQuery(GET_CATE)

    if (data) console.log(data, 'dataCate')
    if (loading) console.log(loading, 'loadingCate')
    if (error) console.log(error, 'errorCate')

    return (
        <ul>
            {data &&
                data.category.map((cate) => {
                    return <li key={cate}>{cate}</li>
                })
            }
        </ul>
    )
}

export default Category