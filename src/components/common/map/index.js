import React, { Component } from 'react'

export default class Map extends Component {
    onLoad = () => {
        const map = new window.google.maps.Map(
            document.getElementById(this.props.id),
            this.props.options
        )
        this.props.onMount(map)
    }

    componentDidMount() {
        if (!window.google) {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = `https://maps.google.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false`
            const headScript = document.getElementsByTagName('script')[0]
            headScript.parentNode.insertBefore(script, headScript)
            script.addEventListener('load', () => {
                this.onLoad()
            })
        } else {
            this.onLoad()
        }
    }

    render() {
        return <div className="bg-white" id={this.props.id} />
    }
}