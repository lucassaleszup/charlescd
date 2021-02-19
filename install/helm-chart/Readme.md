# CharlesCD chart

Suggestion: write here the file's purpose.

## Mandatory.

 - Change `hostGlobal` and `keycloakHost` values.
    - Default `hostGlobal` value: http://charles.info.example
    - Example of custom value: https://charles.org

    - Default `keycloakHost`value: http://charles.info.example/keycloak
    - Example of custom value: https://charles.org/keycloak

## Postgresql

If your stack already has a PostgreSQL instance, you could change `postgresGlobal.host` to your PostgreSQL host and executing all commands in `templates/postgres-cm.yaml` in your database. If you want to change the passwords, remember to change in all `CharlesApplication.applications.database` values and `keycloak.database`.
In this case, change `postgresql.enabled` to false to not install default PostgreSQL.

## Redis

If your stack already has a Redis instance, you could change `CharlesApplications.circleMatcher.redis` values to your Redis connection data.
In this case, change `redis.enabled` to false to don't install default Redis.

## Keycloak

We use the code-centric chart, available in [github](https://github.com/codecentric/helm-charts/tree/master/charts/keycloak), so all the values could be edited using `values.keycloak.some-property`. By default we change the following params:

- `contextPath`: /keycloak/auth
- `fullNameOverride`: "charlescd-keycloak"
- `postgres.enabled`: false
- `extraEnv`: With database values and import realm
- `securityContext.runAsUser`: 0
- `securityContext.runAsNonRoot`: false
- `startupScripts.contextPath.cli`: frontend url and context config
- `livenessProbe`: with new contextPath
- `readinessProbe`: with new context path
- `extraInitContainers`: to test postgres connection
- `auth.adminPassword`: admin
- `extraVolumes`: realm import volume
- `extraVolumesMounts`: mount import volume

## Envoy

We use envoy to make reverse proxy. You can enable or disable a route to application changing `envoy.application.enable` to false.
If you want to use your IDM instead, set `envoy.keycloak.enabled` to false and change `envoy.idm values`to your IDM configuration.


# CharlesCD properties

| Key | Description | Default | 
| -------------- | ----------- | ---------- |
| postgresqlGlobal.host | PostgreSQL path that will be used by CharlesCD | charlescd-postgresql |
| postgresqlGlobal.port | PostgreSQL port that will be used by CharlesCD | 5432 |
| hostGlobal | Application host | http://charles.info.example |
| keycloakHost | Keycloak or external IDM host |  http://charles.info.example/keycloak/auth |
| CharlesApplications | CharlesCD configuration  | ---- |
| CharlesApplications.butler.enabled | Enable butler install | true |
| CharlesApplications.butler.name | Component name | charlescd-butler |
| CharlesApplications.butler.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.butler.healthCheck.path | Health check path | /healthcheck |
| CharlesApplications.butler.healthCheck.port | Health check port | 3000 |
| CharlesApplications.butler.healthCheck.initialDelay | Health check initial delay | 60 |
| CharlesApplications.butler.image.repository | Docker image registry | zupcharles |
| CharlesApplications.butler.image.application | Docker image application | charlescd-butler |
| CharlesApplications.butler.imagePullSecrets | Point to docker secret | false
| CharlesApplications.butler.pullPolicy | Image pull policy  | Always |
| CharlesApplications.butler.service.name | Service name | charlescd-butler |
| CharlesApplications.butler.service.type | Service type | ClusterIP
| CharlesApplications.butler.service.ports | List of ports | --- |
| CharlesApplications.butler.service.ports[0].name | Port name | http |
| CharlesApplications.butler.service.ports[0].port | Port value | 3000 | 
| CharlesApplications.butler.replicaCount | Number of replicas | 1 |
| CharlesApplications.butler.resources | Kubernetes resources | {} |
| CharlesApplications.butler.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.butler.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.butler.affinity | Kubernetes affinity | {} |
| CharlesApplications.butler.postgresqlWait | Test if postgresql is reachable | true |
| CharlesApplications.butler.database | Database information | --- |
| CharlesApplications.butler.database.host | Database host | charlescd-postgresql |
| CharlesApplications.butler.database.port | Database port | 5432 |
| CharlesApplications.butler.database.user | Database user | charlescd_butler |
| CharlesApplications.butler.database.password | Database password | 3f2Yq8R4HhDCnefR |
| CharlesApplications.butler.database.name | Database name | charlescd_butler |
| CharlesApplications.butler.database.ssl | Disable ssl check | false |
| CharlesApplications.moove.enabled | Enable moove install  | true |
| CharlesApplications.moove.name | Component name | charlescd-moove |
| CharlesApplications.moove.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.moove.healthCheck.path | health check path | /actuator/health |
| CharlesApplications.moove.healthCheck.port | health check port | 8080 |
| CharlesApplications.moove.healthCheck.initialDelay | health check initial delay | 180 |
| CharlesApplications.moove.image.repository | Docker image registry | zupcharles |
| CharlesApplications.moove.image.application | Docker image application | charlescd-moove |
| CharlesApplications.moove.imagePullSecrets | Point to docker secret | false
| CharlesApplications.moove.pullPolicy | Image pull policy  | Always |
| CharlesApplications.moove.service.name | Service name | charlescd-moove |
| CharlesApplications.moove.service.type | Service type | ClusterIP |
| CharlesApplications.moove.service.ports | List of ports | --- |
| CharlesApplications.moove.service.ports[0].name | Port name | http |
| CharlesApplications.moove.service.ports[0].port  | Port value | 8080 |
| CharlesApplications.moove.replicaCount | Number of replicas | 1 |
| CharlesApplications.moove.resources | Kubernetes resources | {} |
| CharlesApplications.moove.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.moove.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.moove.affinity | Kubernetes affinity | {} |
| CharlesApplications.moove.postgresqlWait | Test if postgresql is reachable | true |
| CharlesApplications.moove.database | Database information | --- |
| CharlesApplications.moove.database.host | Database host | charlescd-postgresql |
| CharlesApplications.moove.database.port | Database port | 5432 |
| CharlesApplications.moove.database.user | Database user | charlescd_moove |
| CharlesApplications.moove.database.password | Database password | 7Qs2KuM9gYzw48BS |
| CharlesApplications.moove.database.name | Database name | charlescd_moove |
| CharlesApplications.moove.allowedOriginHost | Allowed hosts | http://charles.info.example |
| CharlesApplications.moove.keycloak | Keycloak information | --- |
| CharlesApplications.moove.keycloak.host | Keycloak host | http://charles.info.example/keycloak/auth |
| CharlesApplications.moove.keycloak.realm | Keycloak realm | charlescd |
| CharlesApplications.moove.keycloak.publicClientId | Keycloak public client id | realm-charlescd |
| CharlesApplications.moove.keycloak.clientId | Keycloak client id | realm-charlescd |
| CharlesApplications.moove.keycloak.clientSecret | Keycloak client id |441cfd37-8443-4f3d-bf6c-ee9861b04e28 | 
| CharlesApplications.moove.internalIdmEnabled | Internal IDM (charles default) | true |
| CharlesApplications.villager.enabled | Enable villager install  | true |
| CharlesApplications.villager.name | Component name | charlescd-villager |
| CharlesApplications.villager.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.villager.healthCheck.path | health check path | /health |
| CharlesApplications.villager.healthCheck.port |  health check port | 8080 |
| CharlesApplications.villager.healthCheck.initialDelay |  health check initial delay | 60 |
| CharlesApplications.villager.image.repository |  Docker image registry | zupcharles |
| CharlesApplications.villager.image.application | Docker image application | charlescd-villager |
| CharlesApplications.villager.imagePullSecrets | Point to docker secret | false |
| CharlesApplications.villager.pullPolicy | Image pull policy  | Always |
| CharlesApplications.villager.service.name | Service name | charlescd-villager |
| CharlesApplications.villager.service.type | Service type | ClusterIP |
| CharlesApplications.villager.service.ports | List of ports | --- |
| CharlesApplications.villager.service.ports[0].name | Port name | http |
| CharlesApplications.villager.service.ports[0].port  | Port value | 8080 |
| CharlesApplications.villager.replicaCount | Number of replicas | 1 |
| CharlesApplications.villager.resources | Kubernetes resources | {} |
| CharlesApplications.villager.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.villager.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.villager.affinity | Kubernetes affinity | {} |
| CharlesApplications.villager.postgresqlWait | Test if postgresql is reachable | true |
| CharlesApplications.villager.buildTimeout | Villager timeout for builds | 15 min |
| CharlesApplications.villager.database | Database information | --- |
| CharlesApplications.villager.database.host | Database host | charlescd-postgresql |
| CharlesApplications.villager.database.port | Database port | 5432 |
| CharlesApplications.villager.database.user | Database user | charlescd_villager |
| CharlesApplications.villager.database.password | Database password | ZkQ67Lnhs2bM3MPN |
| CharlesApplications.villager.database.name | Database name | charlescd_villager |
| CharlesApplications.octopipe.enabled | Enable octopipe install  | true |
| CharlesApplications.octopipe.serviceAccountName | Service account with cluster rules | charlescd-octopipe |
| CharlesApplications.octopipe.name | Component name | charlescd-octopipe |
| CharlesApplications.octopipe.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.octopipe.healthCheck.path | health check path | /api/v1/health |
| CharlesApplications.octopipe.healthCheck.port |  health check port | 8080 |
| CharlesApplications.octopipe.healthCheck.initialDelay |  health check initial delay | 60 |
| CharlesApplications.octopipe.image.repository |  Docker image registry | zupcharles |
| CharlesApplications.octopipe.image.application | Docker image application | charlescd-octopipe |
| CharlesApplications.octopipe.imagePullSecrets | Point to docker secret | false |
| CharlesApplications.octopipe.pullPolicy | Image pull policy  | Always |
| CharlesApplications.octopipe.service.name | Service name | charlescd-octopipe |
| CharlesApplications.octopipe.service.type | Service type | ClusterIP |
| CharlesApplications.octopipe.service.ports | List of ports | --- |
| CharlesApplications.octopipe.service.ports[0].name | Port name | http |
| CharlesApplications.octopipe.service.ports[0].port  | Port value | 8080 |
| CharlesApplications.octopipe.replicaCount | Number of replicas | 1 |
| CharlesApplications.octopipe.resources | Kubernetes resources | {} |
| CharlesApplications.octopipe.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.octopipe.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.octopipe.affinity | Kubernetes affinity | {} |
| CharlesApplications.octopipe.limits.timeoutResourceVerification | Timeout for deploy health check | 300 |
| CharlesApplications.octopipe.limits.requestBySecond | Requests by second limit | 10 |
| CharlesApplications.ui.enabled | Enable ui install  | true |
| CharlesApplications.ui.name | Component name | charlescd-ui |
| CharlesApplications.ui.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.ui.healthCheck.path | health check path | / |
| CharlesApplications.ui.healthCheck.port |  health check port | 3000 |
| CharlesApplications.ui.healthCheck.initialDelay |  health check initial delay | 20 |
| CharlesApplications.ui.image.repository |  Docker image registry | zupcharles |
| CharlesApplications.ui.image.application | Docker image application | charlescd-ui |
| CharlesApplications.ui.imagePullSecrets | Point to docker secret | false |
| CharlesApplications.ui.pullPolicy | Image pull policy  | Always |
| CharlesApplications.ui.service.name | Service name | charlescd-ui |
| CharlesApplications.ui.service.type | Service type | ClusterIP |
| CharlesApplications.ui.service.ports | List of ports | --- |
| CharlesApplications.ui.service.ports[0].name | Port name | http |
| CharlesApplications.ui.service.ports[0].port  | Port value | 3000 |
| CharlesApplications.ui.replicaCount | Number of replicas | 1 |
| CharlesApplications.ui.resources | Kubernetes resources | {} |
| CharlesApplications.ui.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.ui.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.ui.affinity | Kubernetes affinity | {} |
| CharlesApplications.ui.postgresqlWait | Test if postgresql is reachable | false |
| CharlesApplications.ui.apiHost | Backend host | http://charles.info.example |
| CharlesApplications.ui.authUri | IDM host | http://charles.info.example/keycloak |
| CharlesApplications.ui.authRealm | IDM realm | charlescd |
| CharlesApplications.ui.authClient | IDM client | charlescd-client |
| CharlesApplications.ui.isIdmEnabled | IDM external enabled | 0 (1 if enabled) |
| CharlesApplications.ui.idmLoginUri | IDM external login | /protocol/openid-connect/auth |
| CharlesApplications.ui.idmLogoutUri | IDM external logout | /protocol/openid-connect/logout |
| CharlesApplications.ui.idmRedirectHost | IDM external redirect url | http://charles.info.example |
| CharlesApplications.circleMatcher.enabled | Enable circle-matcher install  | true |
| CharlesApplications.circleMatcher.name | Component name | charlescd-circle-matcher |
| CharlesApplications.circleMatcher.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.circleMatcher.healthCheck.path | health check path | /actuator/health |
| CharlesApplications.circleMatcher.healthCheck.port |  health check port | 8080 |
| CharlesApplications.circleMatcher.healthCheck.initialDelay |  health check initial delay | 120 |
| CharlesApplications.circleMatcher.image.repository |  Docker image registry | zupcharles |
| CharlesApplications.circleMatcher.image.application | Docker image application | charlescd-circle-matcher |
| CharlesApplications.circleMatcher.imagePullSecrets | Point to docker secret | false |
| CharlesApplications.circleMatcher.pullPolicy | Image pull policy  | Always |
| CharlesApplications.circleMatcher.service.name | Service name | charlescd-circle-matcher |
| CharlesApplications.circleMatcher.service.type | Service type | ClusterIP |
| CharlesApplications.circleMatcher.service.ports | List of ports | --- |
| CharlesApplications.circleMatcher.service.ports[0].name | Port name | http |
| CharlesApplications.circleMatcher.service.ports[0].port  | Port value | 8080 |
| CharlesApplications.circleMatcher.replicaCount | Number of replicas | 1 |
| CharlesApplications.circleMatcher.resources | Kubernetes resources | {} |
| CharlesApplications.circleMatcher.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.circleMatcher.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.circleMatcher.affinity | Kubernetes affinity | {} |
| CharlesApplications.circleMatcher.allowedOriginHost | Allowed hosts | http://charles.info.example |
| CharlesApplications.circleMatcher.redis | redis configuration | --- |
| CharlesApplications.circleMatcher.redis.profile | Redis profiles | redis-standalone |
| CharlesApplications.circleMatcher.redis.host | Redis host | charlescd-redis-master |
| CharlesApplications.circleMatcher.redis.port | Redis port | 6379 |
| CharlesApplications.circleMatcher.redis.password | Redis password | hb2Fj9MGKjBkZ6zV |
| CharlesApplications.circleMatcher.redis.ssl | Disable ssl check | false |
| CharlesApplications.circleMatcher.redis.cluster | If redis-cluster is used in redis.profile use this vars | --- |
| CharlesApplications.circleMatcher.redis.cluster.enabled | enable redis-cluster | false |
| CharlesApplications.circleMatcher.redis.cluster.nodes | Redis cluster nodes | "example" |
| CharlesApplications.circleMatcher.redis.sentinel | If redis-sentinel is used in redis.profile use this vars | --- |
| CharlesApplications.circleMatcher.redis.sentinel.enabled | enable redis-sentinel | false |
| CharlesApplications.circleMatcher.redis.sentinel.nodes | Redis sentinel nodes | "example" |
| CharlesApplications.circleMatcher.redis.sentinel.master | Redis sentinel master node | "example" |
| CharlesApplications.compass.enabled | Enable compass install  | true |
| CharlesApplications.compass.name | Component name | charlescd-compass |
| CharlesApplications.compass.sidecarIstio.enabled | Enable istio sidecar | true |
| CharlesApplications.compass.healthCheck.path | health check path | /health |
| CharlesApplications.compass.healthCheck.port |  health check port | 8080 |
| CharlesApplications.compass.healthCheck.initialDelay |  health check initial delay | 60 |
| CharlesApplications.compass.image.repository |  Docker image registry | zupcharles |
| CharlesApplications.compass.image.application | Docker image application | charlescd-compass |
| CharlesApplications.compass.imagePullSecrets | Point to docker secret | false |
| CharlesApplications.compass.pullPolicy | Image pull policy  | Always |
| CharlesApplications.compass.service.name | Service name | charlescd-compass |
| CharlesApplications.compass.service.type | Service type | ClusterIP |
| CharlesApplications.compass.service.ports | List of ports | --- |
| CharlesApplications.compass.service.ports[0].name | Port name | http |
| CharlesApplications.compass.service.ports[0].port  | Port value | 8080 |
| CharlesApplications.compass.replicaCount | Number of replicas | 1 |
| CharlesApplications.compass.resources | Kubernetes resources | {} |
| CharlesApplications.compass.nodeSelector | Kubernetes node selector | {} |
| CharlesApplications.compass.tolerations | Kubernetes tolerations | {} |
| CharlesApplications.compass.affinity | Kubernetes affinity | {} |
| CharlesApplications.compass.postgresqlWait | Test if postgresql is reachable | true |
| CharlesApplications.compass.database | Database information | --- |
| CharlesApplications.compass.database.host | Database host | charlescd-postgresql |
| CharlesApplications.compass.database.port | Database port | 5432 |
| CharlesApplications.compass.database.user | Database user | charlescd_compass |
| CharlesApplications.compass.database.password | Database password | C1UinUu6N0vc |
| CharlesApplications.compass.database.name | Database name | charlescd_compass |
| CharlesApplications.compass.databaseIgnoreSSL | Disable ssl check | false |
| CharlesApplications.compass.pluginsDir | plugins directory in pod | ./plugins |
| CharlesApplications.compass.dispatchInterval | Dispatch interval | 15s |
| CharlesApplications.compass.limits | compass limits | --- |
| CharlesApplications.compass.limits.requestPerSecond | Request per second | 4 |
| CharlesApplications.compass.limits.tokenTTL | --- | 5 |
| CharlesApplications.compass.limits.headersTTL | --- | 5 |
| CharlesApplications.compass.moove | moove data | --- |
| CharlesApplications.compass.moove.user | moove admin user | Y2hhcmxlc2FkbWluQGFkbWlu |
| CharlesApplications.compass.moove.auth | moove admin token | token example |
| CharlesApplications.compass.moove.database | Database information | --- |
| CharlesApplications.compass.moove.database.host | Database host | charlescd-postgresql |
| CharlesApplications.compass.moove.database.port | Database port | 5432 |
| CharlesApplications.compass.moove.database.user | Database user | charlescd_moove |
| CharlesApplications.compass.moove.database.password | Database password | 7Qs2KuM9gYzw48BS |
| CharlesApplications.compass.moove.database.name | Database name | charlescd_moove |
| envoy | Envoy configs | --- |
| envoy.enabled | Envoy install | --- |
| envoy.ui.enabled | enable ui envoy proxy | true |
| envoy.moove.enabled | enable moove envoy proxy | true |
| envoy.circlematcher.enabled | enable circle-matcher envoy proxy | true |
| envoy.keycloak.enabled | enable keycloak envoy proxy | true |
| envoy.octopipe.enabled | enable octopipe envoy proxy | true |
| envoy.compass.enabled | enable compass envoy proxy | true |
| envoy.cors.enabled | Enable cors validation | true |
| envoy.cors.hosts | Allowed hosts | [] |
| envoy.idm | IDM configs for JWT validation | --- |
| envoy.idm.endpoint | IDM endpoint | charlescd-keycloak-http |
| envoy.idm.port | IDM port | 80 |
| envoy.idm.path | IDM path | /keycloak/auth/realms/charlescd/protocol/openid-connect/userinfo |
| envoy.idm.protocol | IDM protocol | http |
| ingress | ingress resource config | --- |
| ingress.host | ingress host | charles.info.example |
| ingress.class | ingress class | nginx |
| ingress.enabled | ingress enabled install | true |
