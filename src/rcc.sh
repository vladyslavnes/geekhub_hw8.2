#!/usr/bin/env sh
rcc () {
	echo "Creating React comonent";
	cd components || exit;
	mkdir "$1";
	echo "import React, { Component } from 'react'
	import './$1.css'

	class $1 extends Component {
	  render () {
	    return (
	      <div className='$1'>
	      </div>
	    )
	  }
	}

	export default $1
	" >> "$1/$1.js";
	touch "$1.css";
	echo "/* eslint-env jest */
	import React from 'react'
	import ReactDOM from 'react-dom'
	import ComponentA from './ComponentA'

	it('renders without crashing', () => {
	  const div = document.createElement('div')
	  ReactDOM.render(<ComponentA />, div)
	})
	" >> "$1/$1.test.js"
}