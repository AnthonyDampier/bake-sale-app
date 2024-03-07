import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

class DealItem extends React.Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
    }
    render(){
        return (
            <View style={styles.container}>
                <Image source={{uri : this.props.deal.uri}}
                    style={styles.image}/>
                <Text>{this.props.deal.name}</Text>
                <Text>{this.props.deal.title}</Text>
                <Text>{this.props.deal.price}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
    },
    container: {
        backgroundColor: '#bbb',
        display: 'flex',
        justifyContent: 'space-around',
    }
});

export default DealItem;

