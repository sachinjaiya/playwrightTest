pipeline {
    agent any

    tools {
        nodejs 'NodeJs24'  // ✅ Must match exactly what you configured
    }

    stages {
        stage('Manual Clone Repo') {
            steps {
                // Cloning into current workspace (.)
                        deleteDir()

                sh 'git clone https://github.com/sachinjaiya/playwrightTest.git .'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('install faker') {
            steps {
                sh 'npm install @faker-js/faker'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
        }
    }
}
