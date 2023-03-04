import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='container card p-5 text-start'>
        <div>
            <h1>A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eum ducimus voluptas eaque? Repudiandae itaque, dolorum iure repellendus, fugiat ab quas molestias cupiditate cumque, officiis molestiae nulla voluptate modi velit!</p>
            <button className='btn btn-primary'>Call to Action!</button>
        </div>
      </div>
    )
  }
}
