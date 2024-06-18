import { View, Text,StyleSheet,Image, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { featuredJobs } from '../Data/featuredJobs';
import { popularJobs } from '../Data/popularJobs';
import JobCard from '../components/jobCard';
import PopularCard from '../components/PopularCard';

export default function HomeScreen({route,}) {
  const {name,email} = route.params;

  return (
    <ScrollView>
      <View style={styles.home}>
      {/*Header*/}
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <Image source={require('../assets/images/user.png')} style={styles.user}/>
      </View>
      {/*Search box*/}
      <View style={styles.search}>
        <Image source={require('../assets/images/search.png')} style={styles.searchIcon}/>
        <TextInput
            style={styles.searchInput}
            placeholder="Search jobs or position"
            placeholderTextColor={'#95969D'}
        />
        <View style={styles.menu}>
        <Image source={require('../assets/images/menu.png')} style={styles.menuIcon}/>
        </View>
      </View>
      {/*Featured jobs*/}
      <View style={styles.featuredJobs}>
          <Text style={styles.featured}>Featured Jobs</Text>
          <Text style={styles.view}>See all</Text>
      </View>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) =>
        <JobCard job={item} />
      }
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
      />
      
      {/*popular jobs*/}
      <View style={styles.popularJobs}>
          <Text style={styles.popularTitle}>Popular Jobs</Text>
          <Text style={styles.popularView}>See all</Text>
      </View>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) =>
        <PopularCard job={item} />
      }
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}
      />
      
      
      
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  home:{
    top:64,
    left:24,
  },
  name:{
    fontSize: 24,
    fontWeight: 700,
  },
  email:{
    color: '#95969D',
    fontSize:20,
    fontWeight: 400,
  },
  user:{
    width: 54,
    height: 54,
    left:300,
    top:-52,
  },
  search:{
    flexDirection:'row',
    height:50,
    width:265,
    borderWidth:1,
    backgroundColor:'#F2F2F3',
    borderColor:'#000000',
    borderRadius:12,
  },
  searchIcon:{
    height:26,
    width:26,
    left:16,
    top:10,
  },
  searchInput:{
    fontSize:15,
    fontWeight:500,
    color:'#000000',
    left:34,
  },
  menu:{
    left:120,
    borderWidth:1,
    backgroundColor:'#F2F2F3',
    borderColor:'#000000',
    borderRadius:12,
    padding:10,
  },
  menuIcon:{
    height:30,
    width:30,
  },
  featuredJobs:{
    flexDirection:'row',
    justifyContent:'space-between',
    top:80
  },
  featured:{
    fontSize:16,
    fontWeight:600,
    color:'#0D0D26',
  },
  view:{
    fontSize:14,
    fontWeight:400,
    right:65,
    color:'#95969D',
  },
  popularJobs:{
    flexDirection:'row',
    justifyContent:'space-between',
    top:60,
  },
  popularTitle:{
    fontSize:16,
    fontWeight:600,
    color:'#0D0D26',
  },
  popularView:{
    fontSize:14,
    fontWeight:400,
    right:65,
    color:'#95969D',
  }
})