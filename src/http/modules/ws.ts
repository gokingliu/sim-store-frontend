import { WebSocketHandler, WebSocketOptions } from '@/types';

class WebSocketClient {
  socket;
  handler: WebSocketHandler;
  open: boolean;
  binaryType: string;
  bufferQueue: string[];
  bufferCap: number;

  constructor(socketOptions: WebSocketOptions) {
    this.socket = new WebSocket(socketOptions.baseURL);
    this.handler = socketOptions.handler;
    this.open = false;
    this.binaryType = socketOptions.binaryType ?? 'blob'; // blob|arraybuffer
    this.bufferQueue = [];
    this.bufferCap = socketOptions.bufferCap ?? 100;

    // WebSocket API
    this.socket.onopen = this.onopen;
    this.socket.onmessage = this.onmessage;
    this.socket.onclose = this.onclose;
    this.socket.onerror = this.onerror;
  }

  onopen = (e: Event) => {
    this.open = true;
    this.handler.onopen?.(e);
    while (this.bufferQueue.length > 0) {
      this.socket.send(this.bufferQueue.shift() as string);
    }
  };

  onmessage = (e: MessageEvent) => {
    this.handler.onmessage?.(e);
  };

  onclose = (e: CloseEvent) => {
    this.rest();
    this.handler.onclose?.(e);
  };

  onerror = (e: Event) => {
    this.rest();
    this.handler.onerror?.(e);
  };

  send = (data: string) => {
    if (this.open) {
      this.socket.send(data);
    } else {
      if (this.bufferQueue.length < this.bufferCap) this.bufferQueue.push(data);
    }
  };

  close = () => {
    this.rest();
    this.socket.close(1000, 'close');
  };

  rest = () => {
    this.open = false;
    this.bufferQueue = [];
  };
}

export { WebSocketClient };
