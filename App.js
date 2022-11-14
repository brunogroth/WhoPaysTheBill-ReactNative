import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyContext } from './src/context';
import { MainStage } from './src/components/main_stage'
import { UserStage } from './src/components/user_stage'
import { MyProvider } from './src/context';

class App extends Component {
  static contextType = MyContext;

  render() {
    return (
      <MyProvider>
        <ScrollView>
          <View style={styles.container}>
            {
              this.context.state.stage === 1 ? 
                <MainStage />
                :
                <UserStage />
            }
          </View>
        </ScrollView>
      </MyProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App