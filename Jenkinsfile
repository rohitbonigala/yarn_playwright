pipeline {
   agent any
   stages {
      stage('change directory') {
         steps {
            // Depends on your language / test framework
            sh 'cd e2e'
         }
      }
      stage('install playwright') {
         steps {
            // Depends on your language / test framework
            sh 'yarn install'
         }
      }
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'yarn test'
         }
      }
   }
}
