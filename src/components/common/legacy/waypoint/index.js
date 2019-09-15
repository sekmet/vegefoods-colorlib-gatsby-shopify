import React from "react"
import { Waypoint } from "react-waypoint"
import $ from "jquery"

class BlockCounter extends React.Component {

    _handleEnter = ({ previousPosition, currentPosition, event }) => {
        //console.log('worked!', this.props)
        //console.log('ITEMS ==== ', $(this.props.innerRef).find(`${this.props.innerchild}`))

        $(this.props.innerRef).find(`body ${this.props.innerchild}`).addClass('item-animate');
        //setTimeout(function () {

            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('.number').each(function () {
                var $this = $(this),
                    num = $this.data('number');
                console.log(num);
                $this.animateNumber(
                    {
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 7000
                );
            });

        //}, 100);

    }

    render() {
        const { children } = this.props
        //console.log('this.props.innerRef === ', this.props.innerRef)
        return <Waypoint onEnter={this._handleEnter}><div ref={this.props.innerRef}>{ children }</div></Waypoint>
    }
}

export const BlockWaypointCounter = React.forwardRef((props, ref) => {

    //console.log('ref === ', ref)
    //console.log('props === ', props)

    return <BlockCounter innerRef={ref} {...props} />
})


class Block extends React.Component {

    _handleEnter = ({ previousPosition, currentPosition, event }) => {
        //console.log('worked!', this.props)
        //console.log('ITEMS ==== ', $(this.props.innerRef).find(`${this.props.innerchild}`))

        $(this.props.innerRef).find(`body ${this.props.innerchild}`).addClass('item-animate');
        setTimeout(function () {

            $('body .ftco-animate.item-animate').each(function (k) {
                var el = $(this);
                setTimeout(function () {
                    var effect = el.data('animate-effect');
                    if (effect === 'fadeIn') {
                        el.addClass('fadeIn ftco-animated');
                    } else if (effect === 'fadeInLeft') {
                        el.addClass('fadeInLeft ftco-animated');
                    } else if (effect === 'fadeInRight') {
                        el.addClass('fadeInRight ftco-animated');
                    } else {
                        el.addClass('fadeInUp ftco-animated');
                    }
                    el.removeClass('item-animate');
                }, k * 50, 'easeInOutExpo');
            });

        }, 100);

    }

    render() {
        const { children } = this.props
        //console.log('this.props.innerRef === ', this.props.innerRef)
        return <Waypoint onEnter={this._handleEnter}><div ref={this.props.innerRef}>{ children }</div></Waypoint>
    }
}

export const BlockWaypoint = React.forwardRef((props, ref) => {

    //console.log('ref === ', ref)
    //console.log('props === ', props)

    return <Block innerRef={ref} {...props} />
})
