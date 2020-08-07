import request from 'superagent'


export const getSearchOptions = async (searchBy) => {
    const term = searchBy === 'ability' ? 'abilities' : `${searchBy}s`;
      const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${term}`)
      const optionList = []
      data.body.forEach(item => {
        optionList.push(item[searchBy])
      })
    
    return optionList;
}


