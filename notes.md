### How I chose to refactor the code

1. Reorganized all components into their own files to make them easier to find and also to allow for scalability.
2. Made TodoHeader and TodoList components into a stateless components for optimization because they are not using state for any purpose
3. Simplified all ‘class … extends  React.Component” to ‘class … extends Component’ because the previous dev already imported { Component } from React
4. Removed all jQuery and instead used state, onChange, autoFocus to accomplish what jQuery was doing
