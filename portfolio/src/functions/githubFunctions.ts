import axiosBase from 'axios'

type ResultProps = {
    title: string
    link: string
}

const axios = axiosBase.create({
    baseURL: 'https://api.github.com/',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
})

export const getRepos = async () => {
    let response = {}
    await axios.get('users/prog-nori/repos')
    .then((res) => {
        console.log(res.data)
        response = res?.data
    })
    return response
    // https://api.github.com/users/prog-nori/repos
}

export const getThumbnails = async (): Promise<ResultProps[]> => {
    const result: ResultProps[] = []
    await getRepos().then(res => {
        console.log(res, Array.isArray(res))
        Array.isArray(res) && res.map(data => {
            console.log(data?.description, data?.html_url)
            result.push({
                title: data?.description || '鮑の塩焼きとイカ臭いミルクのソテー。ひじきいなりを添えて',
                link: data?.html_url || '/',
            })
        })
    })
    return result
}

// https://api.github.com/repos/prog-nori/java-utility/contents/plan.md

// https://api.github.com/repos/prog-nori/java-utility/languages

/**
 * メモ
 * 
 * res.data[n].html_url - webページへのリンク
 * res.data[n].description - レポジトリの説明
 */