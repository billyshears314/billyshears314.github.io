<template>
  <div>
    <h1>Porfolio</h1>
    <md-content>
      <Project name="Recipe Program" />
    </md-content>
    <md-content>
      <Project name="Block Builder" />
    </md-content>
    <md-content>
      <Project name="3d Maze Multiplayer" />
    </md-content>
  </div>
</template>

<script>

import Project from './Project';

export default {
  name: 'HelloWorld',
  components: {
    Project
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
