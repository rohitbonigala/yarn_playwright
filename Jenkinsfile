pipeline {
   agent any
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'cd e2e'
            sh 'yarn install'
            sh 'yarn test'
         }
      }
   }
}
