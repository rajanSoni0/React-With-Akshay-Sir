import React from 'react'

function Counter() {
  return (
    <div>
        <div className="counter-container">
                    <div className="counter-actions">
                        <button className="btn-counter dec" onClick={() => {
                            this.setState({
                                count: this.state.count - 1,
                            })
                        }}>-</button>
                        <h1 className="num">{count}</h1>
                        <button className="btn-counter inc" onClick={() => {
                            this.setState({
                                count: this.state.count + 1,
                            })
                        }}>+</button>
                    </div>

                    <button className="reset" onClick={() => {
                        this.setState({
                            count: 0,
                        })
                    }}>Reset</button>
                </div>
    </div>
  )
}

export default Counter;