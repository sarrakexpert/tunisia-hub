// Copyright 2021 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export let users :any= [];

const dev_users = [
    {
        id: `user`,
        alt: [
            { username: `sarra.bech`, password: `Rules!12345!!*` },
            { username: ``, password: `` },
        ],
    },
];

export function getUsersPool(env: string) {
    //console.log(env);
    switch (env) {
        case `dev`:
            users = dev_users;
            break;
        case `stage`:
            users = '';
            break;
        default:
            users = [
                {
                    id: `operator`,
                    alt: [{ username: `test.maker`, password: `Rules12345$` }],
                },
            ];
            break;
    }

    //console.log(users);
    return users;
}


export function getUrl(env: string) {
    let url = '';
    switch (env) {
        case `dev`:
            url = 'https://pega870-web-tnhubcosmosreact.dev.k-expert.com/prweb/app/simbafw/CWRZzxAkMqIuoiZieh-_tw*/!STANDARD?pyActivity=%40baseclass.pzProcessURLInWindow&pyPreActivity=Embed-PortalLayout.RedirectAndRun&ThreadName=OpenPortal_UserPortal&Location=pyActivity%3DData-Portal.ShowSelectedPortal%26portal%3DUserPortal%26Name%3D%20UserPortal%26pzSkinName%3D%26developer%3Dfalse%26ThreadName%3DOpenPortal_UserPortal%26launchPortal%3Dtrue%26mSessionThreadName%3DOpenPortal_UserPortal&bPurgeTargetThread=true&target=popup&portalThreadName=STANDARD&portalName=Developer&pzHarnessID=HID37AD8E4059E39BCCC53F5B3E1E978309';
            break;
        
        default:
            url = '';
            break;

    }
    return url;
}

