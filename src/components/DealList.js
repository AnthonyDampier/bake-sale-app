import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, FlatList, StyleSheet } from 'react-native';
import DealItem from './DealItem';

class DealList extends React.Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
    }
    render(){
        return (
            <View style={styles.list}>
                <Text>Deals...</Text>
                <FlatList
                    data={this.props.deals}
                    renderItem={({item}) => <DealItem deal={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        paddingTop: '50px',
    }
});

export default DealList;