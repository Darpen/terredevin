import React from "react"
import { View, Dimensions, StyleSheet, Animated, PanResponder } from "react-native"
import Slide from "./Slide"

const { width } = Dimensions.get("window")
let index = 0

export default class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    // pan = new Animated.ValueXY

    // panResponder = PanResponder.create({
        
    // })
    
    // getPanResponder(index){
    //     return PanResponder.create({
    //         onMoveShouldSetPanResponder: (e, gestureState) => {
    //             if (e.nativeEvent.pageY > 88 && e.nativeEvent.pageY < 88 + 236) {
    //                 return true
    //             }
    //             return false
    //         },
    //         onPanResponderGrant: () => { //Au touch
    //         this.pan[index].setOffset({
    //             x: this.pan[index].x._value,
    //         })
    //         },
    //         onPanResponderMove: Animated.event([ //Pendant le mouvement
    //         null,
    //         { dx: this.pan[index].x, dy: this.pan[index].y },
    //         ]),
    //         onPanResponderRelease: () => { //Au relâchement
    //             this.pan[index].flattenOffset()
    //         }
    //     })
    // }


    previousEvent = () => {
        if (index - 1 < 0) {
            index = 4
        } else {
            index--
        }
        this.setState({index : index})
    }

    nextEvent = () => {
        if (index + 1 >= 5) {
            index = 0
        } else {
            index++
        }
        this.setState({index : index})
    }

    render() {
        return (
            <>
                <View style={s.slider} >
                    <Slide
                        event={this.props.nextEvents[this.state.index]}
                        onPress={this.props.onPress}
                        nextEvent={this.nextEvent}
                        previousEvent={this.previousEvent}
                    />
                </View>
            </>
        )
    }
}

const s = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15
    },
    image: {
        width: width,
        height: 236
    },
    slider: {
        position: "absolute",
        top: 0,
        left: -1 * index * width,
    }
})