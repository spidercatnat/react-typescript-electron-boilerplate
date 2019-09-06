import { ReplaySubject } from 'rxjs'
/** TODO:
 *  - Ensure singularity by converting into a true singleton class
 */


const subject: ReplaySubject<any> = new ReplaySubject()

export const messageService = {
    sendMessage: (topic: any, data: any) => {
        subject.next({ topic, data });
    },
    getMessage: () => subject.asObservable()
}

