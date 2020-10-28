import { expect } from 'chai'
import api from '../services/api'

interface Recipe {
  description : string;
}

describe('Recipe routes', async () => {

  it('should create a new Recipe', async () => {
    const recipe = {
      description: 'Alarmes do Loratadina',
      medicine_id: 3,
      hour: '8:40',
      weeks: [
        {
          week_day: 1
        },
        {
          week_day: 3
        }
      ]

    }
    const { data } = await api.post('/recipe', recipe, {
      headers: {
        authorization: 4
      }
    })
    expect(data).to.be.an('object')
  })

  it('should list all recipes', async () => {
    const { data } = await api.get('/recipe', { headers: { authorization: 3 } })
    const recipes = data;

    expect(recipes).to.be.an('array')
  })

  it('should list single recipe', async () => {
    const { data } = await api.get('/recipe/2')
    const recipe = data;
    expect(recipe).to.be.an('object')
  })
  
  it('should update a recipe', async () => {
  
    const { data: getData } = await api.get('/recipe/2');
      const recipe : Recipe = getData;
      recipe.description += '11:10';
      const { data } = await api.put('/recipe/2', {
        ...recipe,
      });
      expect(data)
        .to.be.an('object')
      
})

  it('should delete a recipe', async () => {
    const { data } = await api.delete('/recipe/2')
    expect(data)
      .to.be.an('object')
      .to.have.property('message')
      .to.equal('recipe deleted');
  })
})