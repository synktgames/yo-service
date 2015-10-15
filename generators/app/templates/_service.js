(function registerService$<%= serviceName %>() {
   'use strict';

    /* @service: <%= serviceName %>
       @created: <%= now %>
       @purpose: <%= purpose %>
    */

    service('<%= serviceName %>'
        ,['Config']
        ,function <%= serviceName%>$init(resolve, $Config) {
            var svc = null;

            resolve(svc);
        });
}());
