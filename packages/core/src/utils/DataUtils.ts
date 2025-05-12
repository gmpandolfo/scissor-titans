export default class DataUtils {
    // hojeComHoraZerada
    static hoje() {
        const hoje = new Date()
        hoje.setHours(0, 0, 0, 0)
        return hoje
    }

    static proximosDias(quantidade: number, incluirHoje: boolean = true): Date[] {
        const dias = []
        const hoje = DataUtils.hoje()

        if (incluirHoje) {
            dias.push(hoje)
        }

        for (let i = 1; i < quantidade; i++) {
            const dia = new Date(hoje.getTime() + 86400000 * i)
            dias.push(dia)
        }

        return dias
    }

    // new Date(), '09:45'
    static aplicarHorario(data: Date, horario: string): Date {
        const novaData = new Date(data)
        const partes = horario.split(':')
        novaData.setHours(parseInt(partes[0]!), parseInt(partes[1]!))
        return novaData
    }

    static formatarData(data: Date): string {
        return data.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    static formatarDataEHora(data: Date): string {
        return data.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
    }
}
