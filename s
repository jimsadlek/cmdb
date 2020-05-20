[INFO] Scanning for projects...
[WARNING] 
[WARNING] Some problems were encountered while building the effective model for com.vmware.hackathon.jms:cmdb.actions:package:1.0.0-SNAPSHOT
[WARNING] 'parent.relativePath' of POM com.vmware.hackathon.jms:cmdb.actions:1.0.0-SNAPSHOT (/Users/sadlekj/ws/IaC/mvn/8/cmdb/actions/pom.xml) points at com.vmware.hackathon.jms:cmdb-all instead of com.vmware.pscoe.o11n:actions-package, please verify your project structure @ line 6, column 11
[WARNING] 
[WARNING] Some problems were encountered while building the effective model for com.vmware.hackathon.jms:cmdb:package:1.0.0-SNAPSHOT
[WARNING] 'parent.relativePath' of POM com.vmware.hackathon.jms:cmdb:1.0.0-SNAPSHOT (/Users/sadlekj/ws/IaC/mvn/8/cmdb/workflows/pom.xml) points at com.vmware.hackathon.jms:cmdb-all instead of com.vmware.pscoe.o11n:xml-package, please verify your project structure @ line 6, column 11
[WARNING] 
[WARNING] Some problems were encountered while building the effective model for com.vmware.hackathon.jms.cmdb:vRA:vra-ng:1.0.0-SNAPSHOT
[WARNING] 'parent.relativePath' of POM com.vmware.hackathon.jms.cmdb:vRA:1.0.0-SNAPSHOT (/Users/sadlekj/ws/IaC/mvn/8/cmdb/vRA/pom.xml) points at com.vmware.hackathon.jms:cmdb-all instead of com.vmware.pscoe.vra-ng:vra-ng-package, please verify your project structure @ line 7, column 13
[WARNING] 
[WARNING] It is highly recommended to fix these problems because they threaten the stability of your build.
[WARNING] 
[WARNING] For this reason, future Maven versions might no longer support building such malformed projects.
[WARNING] 
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Build Order:
[INFO] 
[INFO] cmdb.actions                                                   [package]
[INFO] cmdb                                                           [package]
[INFO] vRA                                                             [vra-ng]
[INFO] cmdb-all                                                           [pom]
[INFO] Downloading from central: http://artifactory.pscoe.vmware.com/artifactory/pscoe/org/apache/maven/plugins/maven-metadata.xml
[INFO] Downloading from central: http://artifactory.pscoe.vmware.com/artifactory/pscoe/org/codehaus/mojo/maven-metadata.xml
[INFO] Downloaded from central: http://artifactory.pscoe.vmware.com/artifactory/pscoe/org/codehaus/mojo/maven-metadata.xml (29 kB at 14 kB/s)
[INFO] Downloaded from central: http://artifactory.pscoe.vmware.com/artifactory/pscoe/org/apache/maven/plugins/maven-metadata.xml (20 kB at 8.2 kB/s)
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary for cmdb-all 1.0.0-SNAPSHOT:
[INFO] 
[INFO] cmdb.actions ....................................... SKIPPED
[INFO] cmdb ............................................... SKIPPED
[INFO] vRA ................................................ SKIPPED
[INFO] cmdb-all ........................................... SKIPPED
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  4.422 s
[INFO] Finished at: 2020-05-19T09:00:49-04:00
[INFO] ------------------------------------------------------------------------
[ERROR] No plugin found for prefix 'vra-ng' in the current project and in the plugin groups [org.apache.maven.plugins, org.codehaus.mojo] available from the repositories [local (/Users/sadlekj/.m2/repository), central (http://artifactory.pscoe.vmware.com/artifactory/pscoe)] -> [Help 1]
[ERROR] 
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR] 
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/NoPluginFoundForPrefixException
