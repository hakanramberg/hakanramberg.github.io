const destination=new URL('https://joinit.hakanramberg.workers.dev/');
destination.search=location.search;
destination.hash=location.hash;
location.replace(destination.href);
