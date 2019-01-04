"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MESSAGE_KIND;
(function (MESSAGE_KIND) {
    MESSAGE_KIND[MESSAGE_KIND["Init"] = 0] = "Init";
    MESSAGE_KIND[MESSAGE_KIND["Update"] = 1] = "Update";
    MESSAGE_KIND[MESSAGE_KIND["Log"] = 2] = "Log";
})(MESSAGE_KIND = exports.MESSAGE_KIND || (exports.MESSAGE_KIND = {}));
class TypeCheckerMessage {
    constructor(kind) {
        this.kind = kind;
    }
}
exports.TypeCheckerMessage = TypeCheckerMessage;
class InitMessage extends TypeCheckerMessage {
    constructor(compilerOptions, basePath, jitMode, rootNames, hostReplacementPaths) {
        super(MESSAGE_KIND.Init);
        this.compilerOptions = compilerOptions;
        this.basePath = basePath;
        this.jitMode = jitMode;
        this.rootNames = rootNames;
        this.hostReplacementPaths = hostReplacementPaths;
    }
}
exports.InitMessage = InitMessage;
class UpdateMessage extends TypeCheckerMessage {
    constructor(rootNames, changedCompilationFiles) {
        super(MESSAGE_KIND.Update);
        this.rootNames = rootNames;
        this.changedCompilationFiles = changedCompilationFiles;
    }
}
exports.UpdateMessage = UpdateMessage;
class LogMessage extends TypeCheckerMessage {
    constructor(level, message) {
        super(MESSAGE_KIND.Log);
        this.level = level;
        this.message = message;
    }
}
exports.LogMessage = LogMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZV9jaGVja2VyX21lc3NhZ2VzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9uZ3Rvb2xzL3dlYnBhY2svc3JjL3R5cGVfY2hlY2tlcl9tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVdBLElBQVksWUFJWDtBQUpELFdBQVksWUFBWTtJQUN0QiwrQ0FBSSxDQUFBO0lBQ0osbURBQU0sQ0FBQTtJQUNOLDZDQUFHLENBQUE7QUFDTCxDQUFDLEVBSlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFJdkI7QUFFRCxNQUFzQixrQkFBa0I7SUFDdEMsWUFBbUIsSUFBa0I7UUFBbEIsU0FBSSxHQUFKLElBQUksQ0FBYztJQUFJLENBQUM7Q0FDM0M7QUFGRCxnREFFQztBQUVELE1BQWEsV0FBWSxTQUFRLGtCQUFrQjtJQUNqRCxZQUNTLGVBQW1DLEVBQ25DLFFBQWdCLEVBQ2hCLE9BQWdCLEVBQ2hCLFNBQW1CLEVBQ25CLG9CQUFnRDtRQUV2RCxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTmxCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUNuQyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO0lBR3pELENBQUM7Q0FDRjtBQVZELGtDQVVDO0FBRUQsTUFBYSxhQUFjLFNBQVEsa0JBQWtCO0lBQ25ELFlBQW1CLFNBQW1CLEVBQVMsdUJBQWlDO1FBQzlFLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFEVixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFVO0lBRWhGLENBQUM7Q0FDRjtBQUpELHNDQUlDO0FBRUQsTUFBYSxVQUFXLFNBQVEsa0JBQWtCO0lBQ2hELFlBQW1CLEtBQXVCLEVBQVMsT0FBZTtRQUNoRSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRFAsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRWxFLENBQUM7Q0FDRjtBQUpELGdDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgbG9nZ2luZyB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5cbmV4cG9ydCBlbnVtIE1FU1NBR0VfS0lORCB7XG4gIEluaXQsXG4gIFVwZGF0ZSxcbiAgTG9nLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZUNoZWNrZXJNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGtpbmQ6IE1FU1NBR0VfS0lORCkgeyB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbml0TWVzc2FnZSBleHRlbmRzIFR5cGVDaGVja2VyTWVzc2FnZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21waWxlck9wdGlvbnM6IHRzLkNvbXBpbGVyT3B0aW9ucyxcbiAgICBwdWJsaWMgYmFzZVBhdGg6IHN0cmluZyxcbiAgICBwdWJsaWMgaml0TW9kZTogYm9vbGVhbixcbiAgICBwdWJsaWMgcm9vdE5hbWVzOiBzdHJpbmdbXSxcbiAgICBwdWJsaWMgaG9zdFJlcGxhY2VtZW50UGF0aHM6IHsgW3BhdGg6IHN0cmluZ106IHN0cmluZyB9LFxuICApIHtcbiAgICBzdXBlcihNRVNTQUdFX0tJTkQuSW5pdCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZU1lc3NhZ2UgZXh0ZW5kcyBUeXBlQ2hlY2tlck1lc3NhZ2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm9vdE5hbWVzOiBzdHJpbmdbXSwgcHVibGljIGNoYW5nZWRDb21waWxhdGlvbkZpbGVzOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKE1FU1NBR0VfS0lORC5VcGRhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2dNZXNzYWdlIGV4dGVuZHMgVHlwZUNoZWNrZXJNZXNzYWdlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGxldmVsOiBsb2dnaW5nLkxvZ0xldmVsLCBwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoTUVTU0FHRV9LSU5ELkxvZyk7XG4gIH1cbn1cbiJdfQ==