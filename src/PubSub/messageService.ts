import { BehaviorSubject } from 'rxjs'

const subject: BehaviorSubject<any> = new BehaviorSubject(0)

export const messageService = {
    sendMessage: (topic: any, data: any) => {
        subject.next({ topic, data });
    },
    getMessage: () => subject.asObservable()
}

