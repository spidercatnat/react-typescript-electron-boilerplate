import { ReplaySubject } from 'rxjs'

const subject: ReplaySubject<any> = new ReplaySubject()

export const messageService = {
    sendMessage: (topic: any, data: any) => {
        subject.next({ topic, data });
    },
    getMessage: () => subject.asObservable(),
}

