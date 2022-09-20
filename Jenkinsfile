pipeline {
   agent { docker { 
      label 'docker'
          image 'node:14-alpine'
          args '--name docker-node' // list any args
        } 
     }
   stages {
      stage('get inside of the directory and use the node version') {
         steps {
            // Depends on your language / test framework
            sh 'cd e2e'
         }
      }
      stage('get inside of the directory and use the node version') {
         steps {
            // Depends on your language / test framework
            sh ''node --version''
         }
      }
      stage('install playwright') {
         steps {
            // Depends on your language / test framework
            sh 'yarn install'
         }
      }
      stage('run tests') {
         steps {
            // Depends on your language / test framework
            sh 'yarn test'
         }
      }
   }
}
