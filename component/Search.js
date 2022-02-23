import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/Film'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

 class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = { films: [] }
}
   _loadFilms() {
      getFilmsFromApiWithSearchedText("star").then(data => this.setState({films : data}));
      console.log(this.state)
   }

  render() {
    return (
      <View style={styles.main_container} >
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button title='Rechercher' color={'orangered'}   onPress={() => this._loadFilms()}/>
        <FlatList
             data={this.state.films}
             keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => <FilmItem film={item}/>}
              />
      </View>
    )
  }
}

const styles = StyleSheet.create({
 

  textinput: {
    marginTop: 40,
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom:20
  }
})

export default Search