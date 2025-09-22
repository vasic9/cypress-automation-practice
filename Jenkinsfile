pipeline {
    environment {
    LANG = 'en_US.UTF-8'
    LC_ALL = 'en_US.UTF-8'
  }
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/vasic9/cypress-automation-practice.git', branch: 'main'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-teststore-dashboard-parallel'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/vasic9/cypress-automation-practice.git', branch: 'main'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTests-teststore-dashboard-parallel'
                    }
                }
            }
        }
    }
}